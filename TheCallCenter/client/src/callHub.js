import { HubHubConnectionBuilder } from "@aspnet/signalr";

class CallHub {
    constructor() {
        this.client = new HubConnectionBuilder().withUrl("/api/call-hub").build();
        
    }
    start() {
        this.client.start();
    }
}
export default new CallHub();