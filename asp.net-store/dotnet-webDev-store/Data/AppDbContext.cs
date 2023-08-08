using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotnet_webDev_store.Models;
using Microsoft.EntityFrameworkCore;

namespace dotnet_webDev_store.Data
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            :base(options)
        {

        }

        public DbSet<Book> Books { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            
            modelBuilder.Entity<Book>().HasData(new Book
            {
                BookId = 1,
                BookTitle = "ASP.NET Core 3 and Angular 9",
                Author = "Valerio De Sanctis",
                Description = "Learning full stack development calls for knowledge of both frontend " +
                "and backend web development. By covering the impressive capabilities of ASP.NET Core " +
                "3.1 and Angular 9, right from project setup through to the deployment phase, this book " +
                "will help you to develop your skills effectively.",
                Price = 265.99m,
                Rating = 5,
                DateAdded= Convert.ToDateTime("2020/02/14")
            });

            modelBuilder.Entity<Book>().HasData(new Book
            {
                BookId = 2,
                BookTitle = "Full-stack ASP.NET Core: Build full-stack web applications",
                Author = "Mircea Teodor Oprea",
                Description = "Learn how to build full-stack web applications using the latest ASP.NET " +
                "Core technologies. The book follows the development of a real-life small project, so " +
                "you are sure to have a fully functional project by the end.",
                Price = 50.00m,
                Rating = 1,
                DateAdded = Convert.ToDateTime("2020/02/15")
            });

            modelBuilder.Entity<Book>().HasData(new Book
            {
                BookId = 3,
                BookTitle = "C# 8.0 and .NET Core 3.0 - Modern Cross-Platform Development",
                Author = "Mark J. Price",
                Description = "In C# 8.0 and .NET Core 3.0 – Modern Cross-Platform Development, Fourth " +
                "Edition, expert teacher Mark J. Price gives you everything you need to start " +
                "programming C# applications. This latest edition uses the popular Visual Studio Code " +
                "editor to work across all major operating systems. It is fully updated and expanded " +
                "with new chapters on Content Management Systems (CMS) and machine learning with ML.NET.",
                Price = 195.00m,
                Rating = 4,
                DateAdded = Convert.ToDateTime("2019/10/31")
            });

            modelBuilder.Entity<Book>().HasData(new Book
            {
                BookId = 4,
                BookTitle = "Reactive Programming for .NET Developers",
                Author = "Antonio Esposito",
                Description = "Reactive programming is an innovative programming paradigm focused " +
                "on time-based problem solving. It makes your programs better-performing, easier to " +
                "scale, and more reliable. Want to create fast - running applications to handle " +
                "complex logics and huge datasets for financial and big - data challenges? Then " +
                "you have picked up the right book!",
                Price = 257.50m,
                Rating = 2,
                DateAdded = Convert.ToDateTime("2016/07/29")
            });

            modelBuilder.Entity<Book>().HasData(new Book
            {
                BookId = 5,
                BookTitle = "Agile Web Development with Rails 6",
                Author = "Sam Ruby",
                Description = "Learn Rails the way the Rails core team recommends it, along " +
                "with the tens of thousands of developers who have used this broad tutorial " +
                "and reference. If you're new to Rails, you'll get step-by-step guidance. If " +
                "you're an experienced developer, get the comprehensive information you need " +
                "for the latest version of Ruby on Rails. The new edition of this " +
                "award-winning classic is completely updated for Rails 6 and Ruby 2.6, with " +
                "information on system testing, Webpack, and advanced JavaScript.",
                Price = 538.00m,
                Rating = 3,
                DateAdded = Convert.ToDateTime("2020/02/25")
            });

            modelBuilder.Entity<Book>().HasData(new Book
            {
                BookId = 6,
                BookTitle = "JavaScript for Beginners",
                Author = "Leonard Base",
                Description = "This book provides a comprehensive description of the basic " +
                "JavaScript language and brings new chapters documenting server-side jQuery " +
                "and JavaScript. Recommended for programmers who want to learn web programming " +
                "language and for JavaScript programmers who want to broaden their knowledge " +
                "and master the language. This is the complete and definitive JavaScript " +
                "programmer's guide and reference manual.",
                Price = 160.00m,
                Rating = 5,
                DateAdded = Convert.ToDateTime("2020/02/19")
            });

            modelBuilder.Entity<Book>().HasData(new Book
            {
                BookId = 7,
                BookTitle = "TypeScript: The Ultimate Beginners Guide",
                Author = "Max Beerbohm",
                Description = "TypeScript is a programming language designed for large-scale " +
                "JavaScript application development, it has been designed as a typed superset of " +
                "JavaScript. This means we’ve actually been writing TypeScript this whole time! " +
                "This language allow us to use features from the most recent ECMAScript versions " +
                "and even some features that are not even in the scope of the standard.",
                Price = 69.99m,
                Rating = 1,
                DateAdded = Convert.ToDateTime("2020/02/04")
            });

            modelBuilder.Entity<Book>().HasData(new Book
            {
                BookId = 8,
                BookTitle = "Node.js API: Learn server-side JavaScript",
                Author = "Greg Sidelnikov",
                Description = "Learn how to build your own vanilla Node.js server from scratch " +
                "with MySQL database.",
                Price = 249.00m,
                Rating = 3,
                DateAdded = Convert.ToDateTime("2020/02/10")
            });

            modelBuilder.Entity<Book>().HasData(new Book
            {
                BookId = 9,
                BookTitle = "Modern Full-stack Development",
                Author = "Frank Zammetti",
                Description = "Explore what React, Node, TypeScript, Webpack, and Docker have to " +
                "offer individually, and how they all fit together in modern app development. " +
                "You’ll begin by building a solid foundation of knowledge and quickly expand it " +
                "by constructing two different real-world apps. ",
                Price = 346.50m,
                Rating = 4,
                DateAdded = Convert.ToDateTime("2020/01/08")
            });
        }
    }
}