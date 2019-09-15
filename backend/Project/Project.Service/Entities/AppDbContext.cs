using Microsoft.EntityFrameworkCore;

namespace Project.Service.Entities
{
    public class AppDbContext : DbContext
    {
        public AppDbContext()
        {
        }

        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySQL("server=localhost;userid=root;password=ONur;database=whatsappgroups; charset=utf8");
        }

        public virtual DbSet<Categories> Categories { get; set; }
        public virtual DbSet<Groups> Groups { get; set; }
    }
}