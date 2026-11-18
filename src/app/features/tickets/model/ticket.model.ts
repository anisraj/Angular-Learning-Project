import { TicketStatus } from '../../../shared/status-badge/status-badge';

export interface Ticket {
  id: number;
  title: string;
  status: TicketStatus;
  description: string;
}
