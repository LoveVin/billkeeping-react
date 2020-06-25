const generateOutput = (text: string, output = '0') => {
    switch (text) {
        case '.':
            if (output.indexOf('.') >= 0) {
                return output;
            }
            return output + '.';
        case '删除':
            if (output.length === 1) {
                return '';
            } else {
                return output.slice(0, -1);
            }
        case '清空':
            return '';
        default:
            if (output === '0') {
                return text;
            } else {
                return output + text;
            }
    }
};

export {generateOutput};
