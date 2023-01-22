import { NextPage } from 'next';
import React, { ReactElement, useState } from 'react';
import { Button } from '../components/Button';

const IndexPage: NextPage = (): ReactElement => {
  const [count, setCount] = useState<number>(0);
  let [num1, setNum1] = useState<number>(0);
  let [num2, setNum2] = useState<number>(0);
  let [text, setText] = useState<string>('');  {/*  なんで const [text, setText]  だとコンパイルエラーになるのか */}
  const [operator, setOperator] = useState<string>('');

  return (
    <div className="m-10 p-4 w-2/3 mx-auto shadow-lg border-6 rounded-2xl">
      <div className="mx-auto">
        <div className="p-3 mb-3 border-2 rounded h-full w-full text-right">
          <span className="text-gray-700 select-none">{count}</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              num2 = 7;
             {/*  console.log(num2);
            　setNum2(num2); 
           　　console.log(count);
              setCount(count - 1);
            */}
              if (num1 === 0)
              {
                num1 = num2;
              } else
              {
                text = `${num1}` +`${num2}`;
                num1 = Number(text);
              };
              console.log(num1);
              setCount(num1);
              {/*  なんで setNum2(num2) だと動かないのか */}
            }}>
            <span className="select-none text-xl">7</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              {/*  後でロジックを書く */}
            }}>
            <span className="select-none text-xl">8</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              {/*  後でロジックを書く */}
            }}>
            <span className="select-none text-xl">9</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              {/*  後でロジックを書く */}
            }}>
            <span className="select-none text-xl">÷</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              {/*  後でロジックを書く */}
            }}>
          <span className="select-none text-xl">4</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              {/*  後でロジックを書く */}
            }}>
            <span className="select-none text-xl">5</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              {/*  後でロジックを書く */}
            }}>
            <span className="select-none text-xl">6</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              {/*  後でロジックを書く */}
            }}>
            <span className="select-none text-xl">×</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              {/*  後でロジックを書く */}
            }}>
            <span className="select-none text-xl">1</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              {/*  後でロジックを書く */}
            }}>
            <span className="select-none text-xl">2</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              {/*  後でロジックを書く */}
            }}>
            <span className="select-none text-xl">3</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              console.log(count);
              setCount(count - 1);
            }}>
            <span className="select-none text-xl">-</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              {/*  後でロジックを書く */}
            }}>
            <span className="select-none text-xl">0</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              {/*  後でロジックを書く */}
            }}>
            <span className="select-none text-xl">.</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              {/*  後でロジックを書く */}
            }}>
            <span className="select-none text-xl">=</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              console.log(count);
              setCount(count + 1);
            }}>
            <span className="select-none text-xl">+</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              setCount(0);
            }}>
            <span className="select-none text-xl">C</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

// export const getStaticProps: GetStaticProps = () => {
// };

// eslint-disable-next-line import/no-default-export
export default IndexPage;
