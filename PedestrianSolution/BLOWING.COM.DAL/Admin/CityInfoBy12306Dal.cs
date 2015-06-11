using BLOWING.COM.COMMON;
using BLOWING.COM.IDAL.Admin;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLOWING.COM.DAL.Admin
{
    public class CityInfoBy12306Dal : ICityInfoBy12306Dal
    {
        /// <summary>
        /// 导入城市信息
        /// </summary>
        /// <param name="cityInfoList">城市信息列表</param>
        /// <returns>结果</returns>
        public bool InsertCityInfoBy12306List(IList<MODEL.Excel.CityInfoBy12306> cityInfoList)
        {

            #region - query -

            string qyStr = @"INSERT INTO [USER].[dbo].[cityinfoBy12306]
           ([cityCode]
           ,[cityName]
           ,[cityShortName]
           ,[spellName]
           ,[spellShortName]
           ,[Column_7]
           ,[Column_8])
     VALUES
           (@cityCode
           ,@cityName
           ,@cityShortName
           ,@spellName
           ,@spellShortName
           ,@Column_7
           ,@Column_8)";
            #endregion
           int result=0;

           try
           {
               foreach (var cityItem in cityInfoList)
               {

                   #region - sql param -
                   SqlParameter[] sqlParams ={

                   new SqlParameter("@cityCode",cityItem.CityCode),
                   new SqlParameter("@cityName",cityItem.CityName),
                   new SqlParameter("@cityShortName",cityItem.CityShortName),
                   new SqlParameter("@spellName",cityItem.SpellName),
                   new SqlParameter("@spellShortName",cityItem.SpellShortName),
                   new SqlParameter("@Column_7",string.Empty),
                   new SqlParameter("@Column_8",string.Empty),
               };
                   #endregion


                   #region - sql exec-
                   result += SqlHelper.ExecuteNonQuery(qyStr, sqlParams);
                   #endregion

               }
               return true;
           }
           catch (Exception ex)
           {

               return false;
          
           }
        }

        /// <summary>
        /// 插入最热门城市
        /// </summary>
        /// <param name="favCityInfoList">热门信息集合</param>
        /// <returns>执行结果</returns>
        public bool InsertFavCityInfoBy12306list(IList<MODEL.Excel.FavCityInfoBy12306> favCityInfoList)
        {
            #region - query -

            string qyStr = @"INSERT INTO [USER].[dbo].[favoriteCityInfoBy12306]
           ([cityCode]
           ,[cityName]
           ,[cityShortName]
           ,[spellName]
           ,[spellShortName]
           ,[Column_7]
           ,[Column_8])
     VALUES
           (@cityCode
           ,@cityName
           ,@cityShortName
           ,@spellName
           ,@spellShortName
           ,@Column_7
           ,@Column_8)";

            #endregion

            int result = 0;

            try
            {
                foreach (var favCityItem in favCityInfoList)
                {

                    #region - sql param -
                    SqlParameter[] sqlParams ={

                   new SqlParameter("@cityCode",favCityItem.CityCode),
                   new SqlParameter("@cityName",favCityItem.CityName),
                   new SqlParameter("@cityShortName",favCityItem.CityShortName),
                   new SqlParameter("@spellName",string.Empty),
                   new SqlParameter("@spellShortName",string.Empty),
                   new SqlParameter("@Column_7",string.Empty),
                   new SqlParameter("@Column_8",string.Empty),
               };
                    #endregion


                    #region - sql exec-
                    result += SqlHelper.ExecuteNonQuery(qyStr, sqlParams);
                    #endregion

                }
                return true;
            }
            catch (Exception ex)
            {

                return false;

            }
        }

    }
}
