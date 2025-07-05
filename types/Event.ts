export interface EventRecord {
    id: string;
    name: string;
    date: string;
    serviceId: number;
    type: string;
    attendance?: number;
    deposit?: number;
    details?: string;
}