namespace API.Entities
{
    public class Employee
    {   
       public int Id { get; set; } 
       public required string FirstName { get; set; }
       public required string LastName { get; set; }
       public required string Position { get; set; }
       public long Salary { get; set; }
       public string? PictureUrl { get; set; }
       
    }
}