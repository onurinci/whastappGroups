using System.Collections.Generic;

namespace Project.Service.Entities
{
    public partial class Categories
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Groups> Groups { get; set; }
    }
}