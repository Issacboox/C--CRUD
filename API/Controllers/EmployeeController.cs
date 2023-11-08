using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore; // Correct import statement

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase // Inherit from ControllerBase
    {

        private readonly StoreContext _context;

        public EmployeeController(StoreContext context)
        {
            _context = context;

        }

        [HttpGet]
        public async Task<ActionResult<List<Employee>>> GetEmployee()
        {
            var employees = await _context.Employee.ToListAsync();
            return Ok(employees);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(int id) // Renamed the method for consistency
        {
            var employee = await _context.Employee.FindAsync(id);

            if (employee == null)
            {
                return NotFound(); // Return a 404 response when the employee is not found.
            }

            return Ok(employee);
        }

        [HttpPost]
        public async Task<ActionResult<Employee>> CreateEmployee([FromBody] Employee employee)
        {
            if (employee == null)
            {
                return BadRequest("Invalid employee data");
            }

            _context.Employee.Add(employee);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployee", new { id = employee.Id }, employee);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<Employee>> UpdateEmployee(int id, [FromBody] Employee updatedEmployee)
        {
            var employee = await _context.Employee.FindAsync(id);

            if (employee == null)
            {
                return NotFound(); // Employee not found
            }

            if (updatedEmployee == null)
            {
                return BadRequest("Invalid employee data");
            }

            // Update employee properties here
            employee.FirstName = updatedEmployee.FirstName;
            employee.LastName = updatedEmployee.LastName;
            employee.Salary = employee.Salary;
            employee.PictureUrl = employee.PictureUrl;

            await _context.SaveChangesAsync();

            return Ok(employee);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteEmployee(int id)
        {
            var employee = await _context.Employee.FindAsync(id);

            if (employee == null)
            {
                return NotFound(); // Employee not found
            }

            _context.Employee.Remove(employee);
            await _context.SaveChangesAsync();

            return NoContent(); // 204 No Content
        }


    }
}
