using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLOWING.COM.MODEL.Excel
{
  public   class FavCityInfoBy12306
    {
        #region - 字段-
        private int _cityID;
        private string _cityCode;
        private string _cityName;
        private string _cityShortName;

        #endregion

        #region - 属性 -
        /// <summary>
        /// 城市ID
        /// </summary>
        public int CityID
        {
            set { _cityID = value; }
            get { return _cityID; }
        }
        /// <summary>
        /// 城市编码
        /// </summary>
        public string CityCode
        {
            set { _cityCode = value; }
            get { return _cityCode; }
        }
        /// <summary>
        /// 城市名称
        /// </summary>
        public string CityName
        {
            set { _cityName = value; }
            get { return _cityName; }

        }
        /// <summary>
        /// 城市缩写
        /// </summary>
        public string CityShortName
        {
            set { _cityShortName = value; }
            get { return _cityShortName; }
        }

        #endregion

    }
}
