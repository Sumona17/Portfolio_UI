import React, { useState } from 'react';
import { Radio, Input, Row, Col } from 'antd';
import PortfolioInsights from './PortfolioInsights';
import Nlpcomponents from './NLPComponent';
// import StandardComponent from './StandardComponent';
// import NLPComponent from './NLPComponent';

const { TextArea } = Input;

const Analysis = () => {
  const [queryType, setQueryType] = useState('standard');
  const [queryText, setQueryText] = useState('');

  const handleRadioChange = (e) => {
    setQueryType(e.target.value);
  };

  return (
    <div style={{ padding: '16px' }}>
      <Row align="middle" gutter={16}>
        <Col>
          <Radio.Group onChange={handleRadioChange} value={queryType}>
            <Radio value="standard">Standard</Radio>
            <Radio value="nlp">NLP Query</Radio>
          </Radio.Group>
        </Col>
        <Col flex="auto">
          <TextArea
            rows={2}
            placeholder="Enter your query here..."
            value={queryText}
            onChange={(e) => setQueryText(e.target.value)}
          />
        </Col>
      </Row>

      <div style={{ marginTop: '20px' }}>
        {queryType === 'standard' ? (
          <PortfolioInsights query={queryText} />
        ) : (
          <Nlpcomponents query={queryText} />
        )}
      </div>
    </div>
  );
};

export default Analysis;
