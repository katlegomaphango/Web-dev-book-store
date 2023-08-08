using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace dotnet_webDev_store.Models
{
    public class Book
    {
        [Key]
        [Column("bookID")]
        public int BookId { get; set;}

        [Required]
        [DisplayName("Book Title")]
        public string? BookTitle { get; set;}
        
        [Required]
        [DisplayName("Book Author")]
        public string? Author { get; set;}

        [Required]
        [DisplayName("Book Description")]
        public string? Description { get; set;}

        [Required]
        [Column(TypeName = "decimal(5, 2)")]
        [RegularExpression(@"^\R?\d+(\.(\d{2}))?R")]
        [DisplayName("Price")]
        public decimal Price { get; set;}

        [Required]
        [DisplayName("Rating")]
        public int Rating { get; set;}

        [Required]
        public DateTime DateAdded { get; set;}
    }
}