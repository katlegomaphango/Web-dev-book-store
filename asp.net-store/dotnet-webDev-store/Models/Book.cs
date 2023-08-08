namespace dotnet_webDev_store.Models
{
    public class Book
    {
        public int BookId { get; set;}
        public string BookTitle { get; set;}
        public string Author { get; set;}
        public string Description { get; set;}
        public decimal Price { get; set;}
        public int Rating { get; set;}
        public DateTime DateAdded { get; set;}
    }
}