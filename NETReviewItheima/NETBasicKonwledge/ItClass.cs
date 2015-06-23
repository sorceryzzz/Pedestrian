using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NETBasicKonwledge
{
    class ItClass
    {
        private string[] _names = { "A","B","C"};


        public string this[int index]
        {
            set { _names[index] = value; }
            get {
                return _names[index];
            }
        }
    }
}
