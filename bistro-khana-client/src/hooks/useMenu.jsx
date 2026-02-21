import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useMenu = () => {
    const axiosurl = useAxios();
    const {data: menu=[], isPending: loadingMenu, refetch}= useQuery({
        queryKey: ['menu'],
        queryFn: async()=>{
            const res = await axiosurl.get('/menu');
            return res.data;

        }
    })
    return [menu, loadingMenu, refetch]
};

export default useMenu;