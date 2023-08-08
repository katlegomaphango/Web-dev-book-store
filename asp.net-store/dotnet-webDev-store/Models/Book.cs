using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace dotnet_webDev_store.Models
{
    public class Book
    {
        [Key]
        [Column("bookID")]
        public int BookId { get; set;}
        [Required]
        public string? BookTitle { get; set;}
        
        [Required]
        public string? Author { get; set;}

        [Required]
        public string? Description { get; set;}

        [Required]
        [Column(TypeName = "decimal(5, 2)")]
        public decimal Price { get; set;}

        [Required]
        public int Rating { get; set;}

        [Required]
        public DateTime DateAdded { get; set;}
    }
}