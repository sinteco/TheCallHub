using Microsoft.AspNetCore.SignalR;
using TheCallCenter.Data.Entities;

namespace TheCallCenter.Hubs
{
    public class CallCenterHub : Hub<ICallCenterHub>
    {
        public async Task NewCallRecived(Call newCall)
        {
            await Clients.Groups("CallCenters").NewCallRecived(newCall);
        }
        public async Task joinCallCenters()
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, "CallCenters");
            //Clients.User // Other // Caller
        }

    }
}
