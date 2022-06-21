import { Edit } from '~/components';
import { useState, useEffect, useCallback } from 'react';
import { getAuth } from 'firebase/auth';

function EmployeeManagement() {
    const [status, setStatus] = useState(false);
    const handleStatus = useCallback( () => {
        setStatus(!status)
    },[status])
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead className="bg-white border-b">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        #
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Image
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Name
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Birth Date
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Email
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr  className="bg-white border-b">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        1
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <img src="image.png" alt="avatar" className="w-8 h-8 rounded-full" />
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <div>Phạm Đức</div>
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <div>05/11/2002</div>
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <div>phamduc988@gmail.com</div>
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <Edit
                                            status={status}
                                            onClick={handleStatus}
                                        />
                                    </td>
                                </tr>
                                <tr  className="bg-white border-b">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        1
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <img src="image.png" alt="avatar" className="w-8 h-8 rounded-full" />
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <div>Phạm Văn Tèo</div>
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <div>07/12/2002</div>
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <div>phamvanteo988@gmail.com</div>
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <Edit
                                            status={status}
                                            onClick={handleStatus}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeManagement;
