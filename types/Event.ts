export interface EventRecord {
    id: string;
    name: string;
    date: string;
    venueId: number;
    type: string;
    attendance?: number;
    deposit?: number;
    details?: string;
}