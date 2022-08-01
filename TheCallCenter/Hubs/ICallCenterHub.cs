using TheCallCenter.Data.Entities;

namespace TheCallCenter.Hubs
{
    public interface ICallCenterHub
    {
        Task NewCallRecived(Call newCall);
        Task joinCallCenters();
    }
}