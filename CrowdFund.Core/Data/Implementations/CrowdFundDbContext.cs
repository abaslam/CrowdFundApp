namespace CrowdFund.Core.Data.Implementations
{
    using CrowdFund.Core.Data.Entities;
    using Microsoft.EntityFrameworkCore;

    public class CrowdFundDbContext : DbContext
    {
        public CrowdFundDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Choice> Choices { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<ClientDocument> ClientDocuments { get; set; }
        public DbSet<Document> Documents { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Choice>(x =>
            {
                x.HasKey(y => y.Id);

            });
            modelBuilder.Entity<Client>(x =>
            {
                x.HasKey(y => y.Id);
                x.HasOne(y => y.Choice).WithMany(y => y.Clients).HasForeignKey(y => y.StatusId);
            });
            modelBuilder.Entity<ClientDocument>(x =>
            {
                x.HasKey(y => y.Id);
                x.HasOne(y => y.Document).WithMany(y => y.ClientDocuments).HasForeignKey(y => y.DocumentId);
                x.HasOne(y => y.Client).WithMany(y => y.ClientDocuments).HasForeignKey(y => y.DocumentId);
            });

            modelBuilder.Entity<Document>(x =>
            {
                x.HasKey(y => y.Id);

            });
            base.OnModelCreating(modelBuilder);
        }
    }
}
