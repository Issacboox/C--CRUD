using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context)
        {
            if (context.Employee.Any()) return;

            var employees = new List<Employee>
            {
                new Employee
                {
                    FirstName = "Maruko",
                    LastName = "Chan",
                    Position = "Manager",
                    Salary = 2000,
                    PictureUrl = "https://cdn-icons-png.flaticon.com/256/3135/3135823.png",
                },
                new Employee
                {
                    FirstName = "Tamako",
                    LastName = "Kidet",
                    Position = "IT Support",
                    Salary = 2000,
                    PictureUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4mwBRyMZQPLtNfrjXJOomKsYBpY2W8BsGBeICakR1Ka4ZMWONOIaB4UTJWSKp9kHsLo&usqp=CAU",
                },
                new Employee
                {
                    FirstName = "Sanji",
                    LastName = "Onepis",
                    Position = "Chef",
                    Salary = 2000,
                    PictureUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRnojlbOKKcwziDqKtldKleZ5n7pcNvkx5HCKWv0qylkeiO9FKrTrIgwJ6NFNqRnALXBo&usqp=CAU",
                },
                new Employee
                {
                    FirstName = "Nura",
                    LastName = "Sang",
                    Position = "Programmer",
                    Salary = 2000,
                    PictureUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHudLKbTNBED0nVlNzoPI1G-1MYN63dxR--9I0HTCK6G3-DEcfoHYfFNmho_SKKxPzs_c&usqp=CAU",
                }
            };

            foreach (var emp in employees)
            {
                context.Employee.Add(emp);
            };

            context.SaveChanges();
        }
    }
}