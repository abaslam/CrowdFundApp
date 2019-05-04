using System;
using System.Collections.Generic;
using System.Text;

namespace CrowdFund.Core.Data.Entities
{
    public class Client
    {
        public Client()
        {
            this.ClientDocuments = new List<ClientDocument>();
        }
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int StatusId { get; set; }

        public virtual Choice Choice { get; set; }
        public virtual ICollection<ClientDocument> ClientDocuments { get; set; }
    }

    public class Choice
    {
        public Choice()
        {
            this.Clients = new List<Client>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool Status { get; set; }

        public virtual ICollection<Client> Clients { get; set; }
    }

    public class ClientDocument
    {
        public Guid Id { get; set; }
        public Guid ClientId { get; set; }
        public Guid DocumentId { get; set; }

        public virtual Client Client { get; set; }
        public virtual Document Document { get; set; }

    }

    public class Document
    {
        public Document()
        {
            this.ClientDocuments = new List<ClientDocument>();
        }

        public Guid Id { get; set; }
        public string FileName { get; set; }
        public DateTime CreatedOn { get; set; }
        public Guid? CreatedBy { get; set; }
        public string FilePath { get; set; }

        public virtual ICollection<ClientDocument> ClientDocuments { get; set; }
    }
}
