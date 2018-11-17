﻿using SomeCompany.Domain.Entities;

namespace SomeCompany.Application.Departments.ResponseDto
{
    internal static class Extensions
    {
        public static DepartmentInfoDto ToDepartmentDto(this Department department)
        {
            var departmentDto = new DepartmentInfoDto
            {
                Id = department.Id,
                DepartmentName = department.DepartmentName
            };

            return departmentDto;
        }
    }
}
