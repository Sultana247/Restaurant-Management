import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaHome, FaPhoneVolume, FaShippingFast, FaUsers, FaWallet } from 'react-icons/fa';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { SiCodechef } from "react-icons/si";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,

    LabelList,
    Label,

    Tooltip,
    Legend,
    Cell,
} from 'recharts';
import { Pie, PieChart, Sector } from 'recharts';
const AdminHome = () => {
    const axiosSecure = useAxiosSecure();
    const { data: adminstat = [] } = useQuery({
        queryKey: ['adminstat'],
        queryFn: async () => {
            const adminStat = await axiosSecure.get('/admin-stats')
            return adminStat.data
        }
    });
    // food stats based on category
    const { revenue, users, products, orders } = adminstat;
    const { data: foodstat = [] } = useQuery({
        queryKey: ['foodstat'],
        queryFn: async () => {
            const foodStat = await axiosSecure.get('/food-stat')
            return foodStat.data
        }
    });
    console.log(foodstat)
    // customize bar shape
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'black'];
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { x, y, width, height, index } = props

        const color = colors[index % colors.length];
        return (
            <path
                strokeWidth="5"
                d={getPath(Number(x), Number(y), Number(width), Number(height))}
                stroke={color}
                fill={color}
                style={{
                    transition: 'stroke-width 0.3s ease-out',
                }}
            />
        );
    };
    const CustomColorLabel = (LabelProps) => {
        const fill = colors[(LabelProps.index ?? 0) % colors.length];
        return <Label {...LabelProps} fill={fill} />;
    };
    // for pie chart
    const pieObj = foodstat.map(item => ({
        name: item._id,
        value: item.revenue
    }));

    console.log('pie chart custom obj', pieObj)
    const RADIAN = Math.PI / 180;
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
            return null;
        }
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const ncx = Number(cx);
        const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
        const ncy = Number(cy);
        const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > ncx ? 'start' : 'end'} dominantBaseline="central">
                {`${((percent ?? 1) * 100).toFixed(0)}%`}
            </text>
        );
    };

    const MyCustomPie = (props) => {
        return <Sector {...props} fill={COLORS[props.index % COLORS.length]} />;
    };
    const dynamicData = pieObj.map((item, index) => ({
        ...item,
        fill: COLORS[index % COLORS.length] // Assign a permanent color
    }));
    // 
    return (
        <div>
            <h2 className='text-2xl md:text-5xl font-bold pt-25 md:pt-15 pb-15'>HI, Welcome Back</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                <div className="stats shadow">
                    <div className="stat px-12 py-12 flex justify-center items-center gap-4 bg-linear-to-r from-[#BB34F5] to-[#FCDBFF]">
                        <div>
                            <FaWallet className='text-5xl text-white'></FaWallet>
                        </div>
                        <div className='text-white'>

                            <div className="stat-value">{revenue}</div>
                            <div className="stat-title inter-font text-2xl text-white">Revenue</div>

                        </div>

                    </div>

                </div>
                <div className="stats shadow">
                    <div className="stat px-12 py-12 flex justify-center items-center gap-4 bg-linear-to-r from-[#D3A256] to-[#FDE8C0]">
                        <div>
                            <FaUsers className='text-5xl text-white'></FaUsers>
                        </div>
                        <div className='text-white'>

                            <div className="stat-value">{users}</div>
                            <div className="stat-title inter-font text-xl text-white">Customers</div>

                        </div>

                    </div>

                </div>
                <div className="stats shadow">
                    <div className="stat px-12 py-12 flex justify-center items-center gap-4 bg-linear-to-r from-[#FE4880] to-[#FECDE9]">
                        <div>

                            <SiCodechef className='text-5xl text-white'></SiCodechef>
                        </div>
                        <div className='text-white'>

                            <div className="stat-value">{products}</div>
                            <div className="stat-title inter-font text-2xl text-white">Menu</div>

                        </div>

                    </div>

                </div>
                <div className="stats shadow">
                    <div className="stat px-12 py-12 flex justify-center items-center gap-4 bg-linear-to-r from-[#FE4880] to-[#FECDE9]">
                        <div>

                            <FaShippingFast className='text-5xl text-white'></FaShippingFast>
                        </div>
                        <div className='text-white'>

                            <div className="stat-value">{orders}</div>
                            <div className="stat-title inter-font text-2xl text-white">Orders</div>

                        </div>

                    </div>

                </div>

            </div>

            {/* charts */}
            <div className='pt-15 flex flex-col md:flex-row gap-4 justify-center items-center'>
                {/* customize bar charts */}
                <div className='w-1/2'>
                    <BarChart
                        style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                        responsive
                        data={foodstat}
                        margin={{
                            top: 20,
                            right: 0,
                            left: 5,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 5" />
                        <Tooltip cursor={{ fillOpacity: 0.5 }} />
                        <XAxis dataKey="_id" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={TriangleBar} activeBar>
                            <LabelList content={CustomColorLabel} position="top" />
                        </Bar>

                    </BarChart>
                </div>
                {/* pie chart */}
                <div className='w-1/2'>
                    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                        <Pie
                            data={dynamicData}
                            labelLine={false}
                            label={renderCustomizedLabel}

                            dataKey="value"
                            nameKey="name"
                            isAnimationActive={true}

                            shape={(props) => {
                                // Use the fill we just attached to the data
                                return <MyCustomPie {...props} fill={props.payload.fill} />;
                            }}
                        >

                        </Pie>
                        <Tooltip />
                        <Legend
                            payload={dynamicData.map((item) => ({
                                id: item.name,
                                type: 'square',
                                value: item.name,
                                color: item.fill // This is now dynamic but STABLE
                            }))}
                        />

                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;