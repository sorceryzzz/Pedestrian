using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NETBasicKonwledge
{
    class Program
    {
        static void Main(string[] args)
        {

            #region - 冒泡排序 -
            //int[] arrInt = { 1, 3, 5, 11, 3, 2, 4, 5, 6, 10 };

            ////数组长度
            //for (int i = 0; i < arrInt.Length-1; i++)
            //{
            //    //索引
            //    for (int j = arrInt.Length-1; j > i; j--)
            //    {
            //        if ( arrInt[j]>arrInt[j - 1] )
            //        {
            //            int tmp = arrInt[j];
            //            arrInt[j] = arrInt[j - 1];
            //            arrInt[j - 1] = tmp;
            //        }

            //    }
            //}

            //for (int i = 0; i < arrInt.Length; i++)
            //{
            //    Console.WriteLine(arrInt[i]);
            //}

            #endregion

            #region - IndexOf -
            //string msg =@"患者:kaffadfdsfsafsfafe";

            //string keywords = "f";
            //int count = 0;
            //int index = 0;

            //while ((index=msg.IndexOf(keywords,index))!=-1)
            //{

            //    count++;
            //    Console.WriteLine("第{0}次，出现f",count);
            //    index += keywords.Length;

            //}
            //Console.WriteLine("总共出现{0}次F",count);
            #endregion

            #region - Trim , Split and Join -
            //string msg = "  hello world,你 好世界 ";
            //msg = msg.Trim();
            //Console.WriteLine(msg);
            //string[] words=msg.Split(new char[]{' '},StringSplitOptions.RemoveEmptyEntries);
            //string fullStr = string.Join(" ",words);
            #endregion

            #region -List -

            //List<string> listNames = new List<string>();
            //while (true)
            //{
            //    Console.WriteLine("请输入姓名: ");
            //    string name = Console.ReadLine();
            //    if (name.ToLower()=="quit")
            //    {
            //        break;
            //    }

            //    listNames.Add(name);
            //}
            //Console.WriteLine("总共输入了{0}个姓名",listNames.Count);



            #endregion

            #region - 类索引器 -
            //ItClass itclass = new ItClass();
            //Console.WriteLine(itclass[0]);
            #endregion

            #region - SizeOf-

            Console.WriteLine(sizeof(int));

            #endregion

            Console.ReadKey();
        }
    }
}
