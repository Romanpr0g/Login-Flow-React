export type Team = {
  id: number;
  name: string;
  members: number;
};

export type Members = {
  id: number;
  name: string;
  patronymic: string;
  telephoneNumber: string;
  pendingStatus: boolean;
  role: string;
};
