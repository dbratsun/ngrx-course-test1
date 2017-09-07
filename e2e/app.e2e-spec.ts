import { NgrxCourseTest1Page } from './app.po';

describe('ngrx-course-test1 App', () => {
  let page: NgrxCourseTest1Page;

  beforeEach(() => {
    page = new NgrxCourseTest1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
