import os
import re
import urllib.error
import urllib.request

root = r"C:\Users\Bruno Nunes\Desktop\PRYM\.next"
chunks_dir = os.path.join(root, "static", "chunks")
chunks = os.listdir(chunks_dir) if os.path.isdir(chunks_dir) else []
print("static_chunks_count", len(chunks))

html = urllib.request.urlopen("http://localhost:3000/", timeout=15).read().decode(
    "utf-8", "ignore"
)
refs = re.findall(r"/_next/static/[^\"']+", html)
print("html_refs_count", len(refs))

errors = 0
for ref in refs[:12]:
    url = "http://localhost:3000" + ref
    try:
        resp = urllib.request.urlopen(url, timeout=10)
        print("OK", resp.status, ref.split("/")[-1][:40])
    except urllib.error.HTTPError as e:
        errors += 1
        print("FAIL", e.code, ref)

print("failures_in_sample", errors)
