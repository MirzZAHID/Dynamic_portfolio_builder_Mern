import React, { useEffect, useState } from 'react'
import AdminLayout from '../Layouts/AdminLayout'
import userImage from '../images/user.png'
export default function Main() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const getUsers = async () => {
          try {
            const response = await fetch('http://localhost:8081/users', {
              method: "GET",
              headers: {
                "Content-type": "application/json"
              }
            });
            const data = await response.json();
            setUsers(data.users);
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        }
        getUsers();
      }, []);
    
    // const userData = [
    //     {
    //         name: 'John',
    //         email: 'john@gmail.com',
    //         phone: '03211111111',
    //         address: 'Abbottabad',
    //         details: 'jsasas',
    //         image: user
    //     },
    //     {
    //         name: 'John',
    //         email: 'john@gmail.com',
    //         phone: '03211111111',
    //         address: 'Abbottabad',
    //         details: 'jsasas',
    //         image: user
    //     },
    // ]    
    const filter = users.filter((user)=>!user.role)
    console.log(filter)
    return (
        <div>
            <AdminLayout>
                <div className="bg-[white] lg:h-auto xs:h-full xl:h-[1000px] xs:pl-3 xs:pr-3 md:pl-0 md:pr-0 lg:pl-0 lg:pr-0">
                    <div>
                        <div className="lg:ml-72 justify-center items-center pt-20 ">
                            <h1 className="lg:text-[30px]  text-center ">Users information</h1>

                            <div className='mx-auto w-[50rem] my-4'>
                                <div class="overflow-x-auto">
                                    <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm table-auto">
                                        <thead class="ltr:text-left rtl:text-right">
                                            <tr>
                                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">id</th>
                                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
                                                {/* <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">City</th>
                                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Address</th> */}
                                                <th class="px-4 py-2"></th>
                                            </tr>
                                        </thead>

                                        <tbody className="divide-y divide-gray-200">
                                            {users.filter((user=>!user.role)).map((user, index) => (
                                                <tr key={index}>
                                                    <td className="whitespace-nowrap px-4 py-2 flex text-gray-700">
                                                        <img src={userImage} alt="" className='mr-2 h-10 w-10 rounded-full' />
                                                        <p className='mt-3 text-gray-700 text-sm'>{user.id}</p>
                                                    </td>
                                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.name}</td>
                                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.email}</td>
                                                    {/* <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.address}</td>
                                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.details}</td> */}
                                                    <td className="whitespace-nowrap px-4 py-2">
                                                        <a
                                                            href="#"
                                                            className="inline-block rounded bg-[#282b8f]  no-underline  px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                                        >
                                                            View
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>


                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </AdminLayout>
        </div>
    )
}
