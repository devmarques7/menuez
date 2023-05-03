export interface IEvent {
  id: string;
  name: string;
  location: string;
  open_at: string;
  close_at: string;
  description: string;
  date: string;
  owner_id: string;
  created_at: string;
  updated_at: string;
  img_cover_event: string;
  category: string;
  sold_out: boolean;
  owner: {
    id: string;
    name: string;
    email: string;
  };
  tickets: {
    id: string;
    ticket_type: string;
    available: boolean;
  }[];
}
