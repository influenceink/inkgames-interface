import { createContext, ReactNode, useState, useCallback, useEffect } from 'react';
import axios from 'axios';

interface IAuthContext {
  authorized: boolean;
  avatar: string;
  email: string;
  fullName: string;
  inkId: string;
  sessionToken: string;
  igSessionToken: string;
  isRememberMe: boolean;
  zipCodes: Array<any>;
  signIn: Function;
  signUp: Function;
  signOut: Function;
  viralCount: number;
  directCount: number;
  totalCount: number;
  showModal: boolean;
  setShowModal: Function;
  setAvatar: Function;
  avatarUploadRequest: Function;
  web3UserUploadRequestUrl: string;
  purchase: Function;
  resetPassword: Function;
  balances: any;
  userInfo: Function;
  authVacancy: Function;
  userVacancy: Function;
  referrerLookup: Function;
}

export const AuthContext = createContext<IAuthContext>({
  sessionToken: '',
  igSessionToken: '',
  isRememberMe: false,
  authorized: false,
  avatar: '',
  setAvatar: () => {},
  avatarUploadRequest: () => {},
  web3UserUploadRequestUrl: '',
  email: '',
  fullName: '',
  inkId: '',
  zipCodes: [],
  signIn: () => {},
  signUp: () => {},
  signOut: () => {},
  viralCount: 0,
  directCount: 0,
  totalCount: 0,
  showModal: false,
  setShowModal: () => {},
  purchase: () => {},
  resetPassword: () => {},
  balances: null,
  userInfo: () => {},
  authVacancy: () => {},
  userVacancy: () => {},
  referrerLookup: () => {}
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [sessionToken, setSessionToken] = useState<string>('');
  const [igSessionToken, setIgSessionToken] = useState<string>('');
  const [authorized, setAuthorized] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<string>('');
  const [web3UserUploadRequestUrl, setWeb3UserUploadRequestUrl] = useState<string>('');
  const [inkId, setInkId] = useState<string>('');
  const [zipCodes, setZipCodes] = useState<Array<any>>([]);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [viralCount, setViralCount] = useState<number>(0);
  const [directCount, setDirectCount] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [balances, setBalances] = useState<any>(null);
  const [isRememberMe, setIsRememberMe] = useState<boolean>(false);
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || 'https://ip-api.ip.d.inksrv.com';
  const igUrl = process.env.REACT_APP_IG_URL || 'https://ig-api.ip.d.inksrv.com';
  useEffect(() => {
    const initialize = async () => {
      try {
        const store = localStorage.getItem('ink');
        const sessionStore = sessionStorage.getItem('ink');
        if (store !== null || sessionStore !== null) {
          var rememberMe = false;
          var sessionToken = '';
          var sessionTokenR = '';
          var igSessionToken = '';
          var igSessionTokenR = '';
          if(store !== null){
            sessionToken = JSON.parse(store).session_token;
            rememberMe = JSON.parse(store).RememberMe;
            igSessionToken = JSON.parse(store).ig_session_token;
          }
          if(sessionStore !== null){
            sessionTokenR = JSON.parse(sessionStore).session_token;
            igSessionTokenR = JSON.parse(sessionStore).ig_session_token;
          }
          if ((rememberMe == true && sessionToken !== undefined && sessionToken !== '') || (sessionTokenR !== undefined && sessionTokenR !== '')) {
            if(sessionTokenR !== undefined && sessionTokenR != '') sessionToken = sessionTokenR;
            if(igSessionTokenR !== undefined && igSessionTokenR != '') igSessionToken = igSessionTokenR;
            await axios
              .post('/user/info', {}, { headers: { Authorization: 'SessionToken=' + sessionToken } })
              .then((res) => {
                if (res.data.status) return;
                axios.defaults.headers.common['Authorization'] = 'SessionToken=' + sessionToken;
                setAvatar(res.data.avatar);
                setSessionToken(sessionToken);
                setIgSessionToken(igSessionToken);
                setInkId(res.data.ink_id);
                setAuthorized(true);
                setZipCodes(res.data.zip_codes);
                setFullName(res.data.full_name);
                setViralCount(res.data.viral_count);
                setDirectCount(res.data.direct_count);
                setTotalCount(res.data.total_count);
                setBalances(res.data.balances);
              });
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    initialize();
  }, []);
  const userInfo = useCallback(async () => {
    await axios.post('/user/info', {}, { headers: { Authorization: 'SessionToken=' + sessionToken } }).then((res) => {
      if (res.data.status) return;
      axios.defaults.headers.common['Authorization'] = 'SessionToken=' + sessionToken;
      setAvatar(res.data.avatar);
      setSessionToken(sessionToken);
      setInkId(res.data.ink_id);
      setAuthorized(true);
      setZipCodes(res.data.zip_codes);
      setFullName(res.data.full_name);
      setViralCount(res.data.viral_count);
      setDirectCount(res.data.direct_count);
      setTotalCount(res.data.total_count);
      setBalances(res.data.balances);
    });
  }, [sessionToken]);

  const updateAvatarUrl = useCallback(async(avatarUrl: string) => {
    await axios.post('/user/update', {"avatar_url": avatarUrl}).then((res) => {
      if(res.data.status) return;
      setAvatar(res.data.avatar);
    })
  }, [])

  const avatarUploadPut = useCallback(async(file: File, putUrl: string, avatarUrl: string) => {
    const formData = new FormData();
    formData.append('file', file);    
    console.log(file);
    var instance = axios.create();
    delete instance.defaults.headers.common['Authorization'];
    await instance.put(putUrl, file, {headers: {'Content-Type': 'image/png'}}).then((res) => {
      if(res.data.status) return;
      updateAvatarUrl(avatarUrl + "?" + file.lastModified);
      return true;
    });
  }, [updateAvatarUrl])

  const avatarUploadRequest = useCallback(async(file: File) =>{
    await axios.post(igUrl + '/user/avatar-upload-request', {}, {headers: {Authorization: 'SessionToken=' + igSessionToken}}).then(async(res) => {
      if(res.data.status) return;
      console.log(res.data);
      setWeb3UserUploadRequestUrl(res.data.uploadUrl);
      await avatarUploadPut(file, res.data.uploadUrl, res.data.avatarUrl);
    });
  }, [igSessionToken, avatarUploadPut, igUrl]);
  const setLocalStore = useCallback(({ session_token, RememberMe, ig_session_token }) => {
    const store = JSON.stringify({ session_token, RememberMe, ig_session_token });
    localStorage.setItem('ink', store);
    sessionStorage.setItem('ink', store);
  }, []);
  const signIn = useCallback(
    async (email, password, isRememberMe) => {
      try {
        const data = await axios.post('/auth/login', { email, password }).then((res) => res.data);
        if(process.env.NODE_ENV == 'development'){
          console.log(data);
        }
        if (data.status === 0) {
          setSessionToken(data.session_token);
          setIgSessionToken(data.ig_session_token);
          setIsRememberMe(isRememberMe);
          setEmail(email);
          setLocalStore({ session_token: data.session_token, RememberMe: isRememberMe, ig_session_token: data.ig_session_token });
          axios.defaults.headers.common['Authorization'] = 'SessionToken=' + data.session_token;
          await axios.post('/user/info').then((res) => {
            setAvatar(res.data.avatar);
            setInkId(res.data.ink_id);
            setAuthorized(true);
            setZipCodes(res.data.zip_codes);
            setFullName(res.data.full_name);
            setViralCount(res.data.viral_count);
            setDirectCount(res.data.direct_count);
            setTotalCount(res.data.total_count);
            setBalances(res.data.balances);
          });
          setShowModal(false);
          return true;
        }
        return false;
      } catch (err) {
        console.log(err);
      }
    },
    [setLocalStore]
  );
  const signUp = useCallback(
    async (props: { email: string; password: string; display_name: string; ink_id: string; referrer_id: string }) => {
      try {
        const data = await axios.post('/auth/create', props).then((res) => res.data);
        if (data.status === 0) {
          setSessionToken(data.session_token);
          setFullName(data.display_name);
          setEmail(data.email);
          setLocalStore({ session_token: data.session_token });
          axios.defaults.headers.common['Authorization'] = 'SessionToken=' + data.session_token;
          await axios.post('/user/info').then((res) => {
            setAvatar(res.data.avatar);
            setInkId(res.data.ink_id);
            setAuthorized(true);
            setZipCodes(res.data.zip_codes);
            setFullName(res.data.full_name);
            setViralCount(res.data.viral_count);
            setDirectCount(res.data.direct_count);
            setTotalCount(res.data.total_count);
            setBalances(res.data.balances);
          });
          setShowModal(false);
          return { status: 0 };
        }
        return data;
      } catch (err) {
        console.log(err);
      }
    },
    [setLocalStore]
  );
  const purchase = useCallback(
    async (props: {
      transaction_id: string;
      usd_amount: number;
      reserved_ink: number;
      paid_coin: string;
      paid_network: string;
    }) => {
      try {
        return axios.post('/web3/purchase', props).then((res) => res.data);
      } catch (err) {
        console.log(err);
      }
    },
    []
  );
  const resetPassword = useCallback(async (props: { email: string }) => {
    try {
      return axios.post('/auth/password-reset', props).then((res) => res.data.status);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const authVacancy = useCallback(async (props: { email: string }) => {
    try {
      return axios.post('/auth/vacancy', props).then((res) => res.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const userVacancy = useCallback(async (props: { ink_id: string }) => {
    try {
      return axios.post('/user/vacancy', { web: true, ...props }).then((res) => res.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const referrerLookup = useCallback(async (props: { referrer_id: string }) => {
    try {
      return axios.post('/referrer/lookup', { web: true, ...props }).then((res) => res.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const signOut = useCallback(async () => {
    setSessionToken('');
    setAuthorized(false);
    setAvatar('');
    setInkId('');
    setZipCodes([]);
    setFullName('');
    setEmail('');
    setViralCount(0);
    setDirectCount(0);
    setTotalCount(0);
    setShowModal(false);
    setBalances(null);
    setLocalStore({});
  }, [setLocalStore]);
  return (
    <AuthContext.Provider
      value={{
        authorized,
        sessionToken,
        isRememberMe,
        avatar,
        avatarUploadRequest,
        web3UserUploadRequestUrl,
        igSessionToken,
        inkId,
        email,
        fullName,
        zipCodes,
        viralCount,
        directCount,
        totalCount,
        signIn,
        signUp,
        signOut,
        showModal,
        setShowModal,
        setAvatar,
        purchase,
        resetPassword,
        balances,
        userInfo,
        authVacancy,
        userVacancy,
        referrerLookup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
