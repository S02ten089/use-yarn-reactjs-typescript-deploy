// Converted Next-style layout into a standard React test component
import React from 'react';

const TestLayout: React.FC = () => {
  return (
    <div style={{width:'100%',height:'100vh',margin:0,padding:0}}>
      <iframe
        title="hacnil Static Test"
        src="/test-site/index.html"
        style={{width:'100%',height:'100%',border:0}}
      />
    </div>
  );
};

export default TestLayout;
