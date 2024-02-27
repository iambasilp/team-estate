export const handleAdminButtonReq = async (id, url, method, setRefreshCount) => {
   try {
      const res = await fetch(`/api/${url}/${id}`, {
         method: method,
      });
      const data = await res.json();
      setRefreshCount((prev) => prev + 1);
   } catch (error) {
      console.error(error);
   }
};
