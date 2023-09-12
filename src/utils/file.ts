export type EncodeType = 'UTF-8' | 'GB2312' | string;

export function readJSONFile(file: Blob): Promise<object> {
  return readTextFile(file).then((res) => {
    try {
      return JSON.parse(res);
    } catch (e) {
      return Promise.reject(e);
    }
  });
}

export function readTextFile(file: Blob, encoding?: EncodeType) {
  return readFile(file, 'Text', encoding);
}

export function readFile<T extends 'Text' | 'ArrayBuffer' = 'ArrayBuffer'>(
  file: Blob,
  type?: T,
  encoding?: EncodeType,
): Promise<T extends 'Text' ? string : ArrayBuffer> {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    const loadend = () => {
      const content = reader.result as T extends 'Text' ? string : ArrayBuffer;
      if (
        type === 'Text' &&
        encoding !== 'GB2312' &&
        (content as string).includes('�')
      ) {
        resolve(readFile(file, type, 'GB2312'));
      } else {
        resolve(content);
      }
      destroy();
    };
    const error = (e) => {
      reject(e);
      destroy();
    };
    const destroy = () => {
      reader.removeEventListener('loadend', loadend);
      reader.removeEventListener('error', error);
      reader = null;
    };

    reader.addEventListener('loadend', loadend);
    reader.addEventListener('error', error);

    switch (type) {
      case 'Text':
        reader.readAsText(file, encoding);
        break;
      default:
        reader.readAsArrayBuffer(file);
    }
  });
}

export function downloadByUrl(url: string, filename?: string) {
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.download = filename || '';

  // fix: firefox52 not work
  a.style.position = 'absolute';
  a.style.top = '-10000px';
  document.body.appendChild(a);
  setTimeout(() => a.remove());

  a.click();
}

export function downloadByContent(content: string, filename: string) {
  const blob = new Blob([content]);
  downloadByBlob(blob, filename);
}

export function downloadByBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  downloadByUrl(url, filename);
  URL.revokeObjectURL(url);
}
