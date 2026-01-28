# CloudCTF 

> 클라우드 보안을 게임처럼 배우는 CTF 플랫폼

## 프로젝트 개요

CloudCTF는 실제 클라우드 인프라의 보안 취약점을 안전한 샌드박스 환경에서 직접 공격하고 방어하는 법을 배우는 인터랙티브 보안 학습 플랫폼입니다.

### 주요 특징

-  **안전한 샌드박스**: LocalStack + Kubernetes로 실제 비용 없이 실습
-  **게임화 학습**: CTF 형식으로 재미있고 몰입감 있는 학습
-  **자동 채점**: 즉각적인 피드백 및 자동 검증
-  **오픈소스**: 교육 기관과 개인이 무료로 활용 가능

## 개발 상태

```
✅ Phase 0: 프로젝트 설정 (진행 중)
⬜ Phase 1: 인프라 구축
⬜ Phase 2: 첫 번째 챌린지
⬜ Phase 3: 백엔드 API
⬜ Phase 4: 프론트엔드
⬜ Phase 5: 추가 챌린지
⬜ Phase 6: 배포 & 문서화
```

## 기술 스택

### Frontend
- React 18 + TypeScript
- Tailwind CSS + shadcn/ui
- WebSocket (실시간 업데이트)

### Backend
- FastAPI (Python)
- PostgreSQL 16
- Redis 7
- Celery (비동기 작업)

### Infrastructure
- Kubernetes (k3s)
- LocalStack (AWS 에뮬레이터)
- Terraform (IaC)
- Docker

### Monitoring
- Prometheus + Grafana

## 빠른 시작

### 요구사항

- Docker & Docker Compose
- Python 3.11+
- Node.js 18+
- kubectl (Kubernetes CLI)

### 로컬 개발 환경 실행

```bash
# 1. 저장소 클론
git clone https://github.com/yourusername/cloudctf.git
cd cloudctf

# 2. 환경 변수 설정
cp .env.example .env
# .env 파일을 편집하여 필요한 값 설정

# 3. 개발 환경 시작
docker-compose up -d

# 4. 데이터베이스 마이그레이션
cd backend
python manage.py migrate

# 5. 프론트엔드 개발 서버 시작
cd ../frontend
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속

## 프로젝트 구조

```
cloudctf/
├── frontend/           # React 프론트엔드
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/            # FastAPI 백엔드
│   ├── app/
│   ├── tests/
│   └── requirements.txt
├── k8s/               # Kubernetes 매니페스트
│   ├── base/
│   └── overlays/
├── challenges/        # 챌린지 정의
│   ├── level1-s3-public/
│   ├── level2-imds-ssrf/
│   └── ...
├── terraform/         # IaC 템플릿
├── scripts/           # 유틸리티 스크립트
├── docs/              # 문서
└── docker-compose.yml
```

## 챌린지 목록

### Level 1: S3 Public Bucket (⬜ 개발 중)
- **난이도**: Easy
- **점수**: 50
- **목표**: 공개된 S3 버킷을 찾아 private으로 수정

### Level 2: IMDSv1 SSRF (⬜ 예정)
- **난이도**: Medium
- **점수**: 100
- **목표**: SSRF 취약점을 통해 EC2 메타데이터 탈취

### Level 3: K8s RBAC Privilege Escalation (⬜ 예정)
- **난이도**: Medium
- **점수**: 150
- **목표**: 과도한 권한을 이용한 권한 상승

## 기여하기

기여를 환영합니다! 자세한 내용은 [CONTRIBUTING.md](CONTRIBUTING.md)를 참조하세요.

### 새로운 챌린지 추가

1. `challenges/` 디렉토리에 새 폴더 생성
2. `challenge.yaml` 파일 작성
3. Terraform 템플릿 작성
4. 자동 채점 로직 구현
5. Pull Request 제출

## 라이선스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일 참조

## 문의

- **이슈**:
- **이메일**: 

## 감사의 말

이 프로젝트는 다음 오픈소스 프로젝트들의 영향을 받았습니다:
- [LocalStack](https://github.com/localstack/localstack)
- [Kubernetes](https://github.com/kubernetes/kubernetes)
- [CTFd](https://github.com/CTFd/CTFd)

---

**Made with ❤️ for the cybersecurity community**
