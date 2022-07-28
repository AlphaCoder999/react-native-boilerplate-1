type Notification = {
  id: string;
  text: string;
};

interface INotifState {
  userToken: string | null;
  lastFetchedOn: Date | null;
  list: Notification[];
}

export type { INotifState };
