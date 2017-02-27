import { SpotifyMusicApiPage } from './app.po';

describe('spotify-music-api App', () => {
  let page: SpotifyMusicApiPage;

  beforeEach(() => {
    page = new SpotifyMusicApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
