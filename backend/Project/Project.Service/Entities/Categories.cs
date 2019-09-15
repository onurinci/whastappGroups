using System.Collections.Generic;

namespace Project.Service.Entities
{
    public class Categories
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public List<Groups> Groups { get; set; }
    }
}