import { Stream } from "stream";

const isStream = (stream) => {
  return stream !== null && typeof stream === 'object' && typeof stream.pipe == 'function';
}
isStream.writable = (stream) => {
  return isStream(stream) && stream.writable !== false && typeof stream._write == 'function'
    && typeof stream._writableState === 'object';
}

isStream.readable = (stream) => {
  return isStream(stream) && stream.readable !== false && typeof stream._read == 'function'
    && typeof stream._readableState === 'object';
}

isStream.duplex = (stream) => {
  return isStream.writable(stream) && isStream.readable(stream);
}

isStream.transform = (stream) => {
  return isStream.duplex(stream) && typeof stream._transform === 'function' &&
    typeof stream._transformState === 'object';
}

export {
  isStream,
};
