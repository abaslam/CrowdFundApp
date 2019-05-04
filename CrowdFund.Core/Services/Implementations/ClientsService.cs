using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CrowdFund.Core.Data.Implementations;
using CrowdFund.Core.Services.Contracts;
using CrowdFund.Core.Services.Entities;

namespace CrowdFund.Core.Services.Implementations
{
    public class ClientsService : IClientService
    {
        private readonly CrowdFundDbContext crowdFundDbContext;

        public ClientsService(CrowdFundDbContext crowdFundDbContext)
        {
            this.crowdFundDbContext = crowdFundDbContext;
        }
        public List<ClientDTO> GetClients()
        {
            return this.crowdFundDbContext.Clients.Select(x => new ClientDTO { Id = x.Id, Name = x.Name, ChoiceName = x.Choice.Name }).ToList();
        }
    }
}
