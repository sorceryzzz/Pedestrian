using NPOI;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {

           #region - 导入城市信息 -
           ImportExcelHelper importExcelHelper = new ImportExcelHelper();
           string resultStr= importExcelHelper.ImportCity("test.xlsx");

           if (resultStr == "sucess")
           {
               Console.WriteLine("导入数据成功");
           }
           else
           {
               Console.WriteLine("导入数据失败");
           }

            #endregion


            #region - 导出城市信息 -
            //string cityStr = File.ReadAllText("city.txt");

            //string path = "pathtmp";
            //ExportExcelHelper exportExcelHelper = new ExportExcelHelper();


            //string resultStr = exportExcelHelper.ExportCity(cityStr, path);

            //if (resultStr == "sucess")
            //{
            //    Console.WriteLine("导出城市信息成功");

            //}
            //else
            //{
            //    Console.WriteLine("导出城市信息失败");

            //} 
            #endregion

            Console.ReadKey();
        }
    }
}
