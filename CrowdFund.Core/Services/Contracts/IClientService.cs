using System;
using System.Collections.Generic;
using System.Text;
using CrowdFund.Core.Services.Entities;

namespace CrowdFund.Core.Services.Contracts
{
    public interface IClientService
    {
        List<ClientDTO> GetClients();
    }
}
