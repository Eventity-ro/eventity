export interface EventRecord {
    id: string;
    name: string;
    date: string;
    service_id: number;
    type: string;
    attendance?: number;
    deposit?: number;
    details?: string;
}