namespace PortalWebBM
{
    public class Response
    {
        private bool _successful;
        private string _data;

        public Response()
        {
            this._data = string.Empty;
            this._successful = false;
        }

        public string Data
        {
            get
            {
                return this._data;
            }
            set
            {
                this._data = value;
            }
        }

        public bool IsSuccessful
        {
            get
            {
                return this._successful;
            }
            set
            {
                this._successful = value;
            }
        }

    }
}
