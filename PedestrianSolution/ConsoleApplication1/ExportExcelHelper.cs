using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    public class ExportExcelHelper
    {
        /// <summary>
        /// 导出城市信息到Excel中
        /// </summary>
        /// <param name="citysStr">城市信息</param>
        /// <param name="path">文件路径</param>
        /// <returns>结果</returns>
        public string ExportCity(string citysStr,string path)
        {
            if (string.IsNullOrEmpty(citysStr)||string.IsNullOrEmpty(path))
            {
                return string.Empty;               
            }

            string[] cityArr=citysStr.Split('|');

            try
            {
                NPOI.HSSF.UserModel.HSSFWorkbook book = new NPOI.HSSF.UserModel.HSSFWorkbook();
                NPOI.SS.UserModel.ISheet sheet = book.CreateSheet("cityInfo");

                int rowNum = 0;
                int cellNum = 0;
                NPOI.SS.UserModel.IRow row = sheet.CreateRow(rowNum);
                for (int i = 0; i < cityArr.Length; i++)
                {
                    //如果到五列,则下一行
                    if (i!=0&&i % 5 == 0)
                    {
                        rowNum += 1;
                        cellNum = 0;
                        row = sheet.CreateRow(rowNum);
                    }

                    row.CreateCell(cellNum).SetCellValue(cityArr[i]);

                    cellNum += 1;
                }
                FileStream sw = File.Create("test.xlsx");
                book.Write(sw);
                sw.Close();

                return "sucess";
            }
            catch (Exception)
            {
                return "fail";
                throw;
            }

   
        }

        /// <summary>
        /// 导出最热门城市到excel
        /// </summary>
        /// <param name="cityStr">城市信息</param>
        /// <param name="path">文件路径</param>
        /// <returns>导出结果</returns>
        public string ExportFavCity(string cityStr,string path)
        {

            if (string.IsNullOrEmpty(cityStr) || string.IsNullOrEmpty(path))
            {
                return string.Empty;
            }

            string[] cityArr = cityStr.Split('|');

            try
            {
                NPOI.HSSF.UserModel.HSSFWorkbook book = new NPOI.HSSF.UserModel.HSSFWorkbook();
                NPOI.SS.UserModel.ISheet sheet = book.CreateSheet("favCityInfo");

                int rowNum = 0;
                int cellNum = 0;
                NPOI.SS.UserModel.IRow row = sheet.CreateRow(rowNum);
                for (int i = 0; i < cityArr.Length; i++)
                {
                    //如果到五列,则下一行
                    if (i != 0 && i % 3 == 0)
                    {
                        rowNum += 1;
                        cellNum = 0;
                        row = sheet.CreateRow(rowNum);
                    }

                    row.CreateCell(cellNum).SetCellValue(cityArr[i]);

                    cellNum += 1;
                }
                FileStream sw = File.Create("favcity.xlsx");
                book.Write(sw);
                sw.Close();

                return "sucess";
            }
            catch (Exception)
            {
                return "fail";
                throw;
            }



        }
    }
}
