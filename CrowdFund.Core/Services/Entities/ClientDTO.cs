using System;
using System.Collections.Generic;
using System.Text;

namespace CrowdFund.Core.Services.Entities
{
    public class ClientDTO
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string ChoiceName { get; set; }
    }
}
