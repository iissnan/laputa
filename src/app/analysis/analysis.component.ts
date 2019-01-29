import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';
import { Entry } from 'contentful';
import { ContentfulService } from '../core/contentful.service';
import { GameInterface, GenreInterface, PlatformInterface } from '../typings';

@Component({
  selector: 'laputa-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {
  public gamesForChart = [];
  public gamesGroupByPlatforms = [];
  public gamesGroupByGenres = [];
  public gamesGroupByCompleted = [];
  public gamesGroupByCompletedAndPlatforms = [];

  private games: Entry<GameInterface>[] = [];
  private platforms: Entry<PlatformInterface>[] = [];
  private genres: Entry<GenreInterface>[] = [];


  constructor(
    private contentfulService: ContentfulService,
  ) { }

  ngOnInit() {
    zip(
      this.contentfulService.getPlatforms(),
      this.contentfulService.getGenres(),
      this.contentfulService.getGames(),
    ).subscribe(([platformsRes, genresRes, gamesRes]) => {
      this.platforms = platformsRes.items;
      this.genres = genresRes.items;
      this.games = gamesRes.items;

      this.gamesForChart = this.getGames();
      this.gamesGroupByPlatforms = this.getGamesGroupByPlatforms();
      this.gamesGroupByGenres = this.getGamesGroupByGenres();
      this.gamesGroupByCompleted = this.getGamesGroupByCompleted();
      this.gamesGroupByCompletedAndPlatforms = this.getGamesGroupByCompletedAndPlatforms();
    });

  }

  public completedChartLabelFormat(label) {
    return label === 'completed' ? '已通关' : '未通关';
  }

  private getGames() {
    return [{
      name: '所有游戏',
      value: this.games.length,
    }];
  }

  private getGamesGroupByPlatforms() {
    const platformGamesCount = {};

    this.platforms.forEach(platform => {
      const platformName = platform.fields.name;
      platformGamesCount[platformName] = 0;
    });

    this.games.forEach(game => {
      const gamePlatforms = game.fields.platforms;
      gamePlatforms.forEach(platform => {
        const platformName = platform.fields.name;

        if (platformGamesCount[platformName] !== void 0) {
          platformGamesCount[platformName]++;
        }
      });
    });

    return Object.keys(platformGamesCount).map(platformName => {
      return {
        name: platformName,
        value: platformGamesCount[platformName],
      };
    });
  }

  private getGamesGroupByGenres() {
    const genreGamesCount = {
      Unknown: 0,
    };

    this.genres.forEach(genre => {
      const name = genre.fields.name;
      genreGamesCount[name] = 0;
    });

    this.games.forEach(game => {
      const gameGenres = game.fields.genres;

      if (gameGenres) {
        gameGenres.forEach(item => {
          const name = item.fields.name;

          if (genreGamesCount[name] !== void 0) {
            genreGamesCount[name]++;
          }
        });
      } else {
        genreGamesCount.Unknown++;
      }

    });

    return Object.keys(genreGamesCount).map(name => {
      return {
        name: name,
        value: genreGamesCount[name],
      };
    });
  }

  private getGamesGroupByCompleted() {
    const chartData = {
      completed: 0,
      uncompleted: 0,
    };

    this.games.forEach(game => {
      if (game.fields.completed) {
        chartData.completed++;
      } else {
        chartData.uncompleted++;
      }
    });

    return Object.keys(chartData).map(item => {
      return {
        name: item,
        value: chartData[item],
      };
    });
  }

  private getGamesGroupByCompletedAndPlatforms() {
    const platformGamesCount = {};

    this.platforms.forEach(platform => {
      const platformName = platform.fields.name;
      platformGamesCount[platformName] = 0;
    });

    this.games.forEach(game => {
      const gamePlatforms = game.fields.platforms;
      const isGameCompleted = game.fields.completed;

      gamePlatforms.forEach(platform => {
        const platformName = platform.fields.name;
        const isPlatformExist = platformGamesCount[platformName] !== void 0;


        if (isPlatformExist && isGameCompleted) {
          platformGamesCount[platformName]++;
        }
      });
    });

    return Object.keys(platformGamesCount).map(platformName => {
      return {
        name: platformName,
        value: platformGamesCount[platformName],
      };
    });
  }

}
