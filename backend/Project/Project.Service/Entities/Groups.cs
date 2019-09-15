namespace Project.Service.Entities
{
    public class Groups
    {
        public int Id { get; set; }
        public int CategoryId { get; set; }
        public string Name { get; set; }

        public Categories Category { get; set; }
    }
}