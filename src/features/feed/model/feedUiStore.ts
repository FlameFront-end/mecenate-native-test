import { makeAutoObservable } from 'mobx';

class FeedUiStore {
  isPullRefreshing = false;

  constructor() {
    makeAutoObservable(this);
  }

  setPullRefreshing(value: boolean) {
    this.isPullRefreshing = value;
  }

  async runPullRefresh(task: () => Promise<unknown>) {
    this.setPullRefreshing(true);

    try {
      await task();
    } finally {
      this.setPullRefreshing(false);
    }
  }
}

export const feedUiStore = new FeedUiStore();
